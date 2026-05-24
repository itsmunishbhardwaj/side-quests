// Google Apps Script — paste this entire file into Extensions → Apps Script
// Then set SPREADSHEET_ID below and deploy as a Web App.

var SPREADSHEET_ID = '1HySLjPb9qzUjlwMLsUEmQrkrL-ZkhddKDpwGG4vv2MU';
var TOPICS_SHEET   = 'Topics';
var VOTES_SHEET    = 'Votes';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function getTopicsSheet() { return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(TOPICS_SHEET); }
function getVotesSheet()  { return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(VOTES_SHEET); }

function doGet(e) {
  var result;
  try {
    result = (e.parameter.action || 'getTopics') === 'getTopics'
      ? getTopics()
      : { error: 'Unknown action' };
  } catch (err) {
    result = { error: err.toString() };
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

// POST uses Content-Type: text/plain from the browser to avoid CORS preflight.
// Apps Script can't respond to OPTIONS requests, so preflights would fail.
function doPost(e) {
  var result;
  try {
    var body   = JSON.parse(e.postData.contents);
    var action = body.action;
    if      (action === 'addTopic') result = addTopic(body);
    else if (action === 'vote')     result = castVote(body);
    else                            result = { error: 'Unknown action: ' + action };
  } catch (err) {
    result = { error: err.toString() };
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function getTopics() {
  var topicsData = getTopicsSheet().getDataRange().getValues();
  var votesData  = getVotesSheet().getDataRange().getValues();

  var voteCounts = {};
  var voterSets  = {};
  for (var i = 1; i < votesData.length; i++) {
    var tid = String(votesData[i][0]).trim();
    var vid = String(votesData[i][1]).trim();
    if (!tid) continue;
    voteCounts[tid] = (voteCounts[tid] || 0) + 1;
    if (!voterSets[tid]) voterSets[tid] = [];
    voterSets[tid].push(vid);
  }

  var topics = [];
  for (var k = 1; k < topicsData.length; k++) {
    var row = topicsData[k];
    var id  = String(row[0]).trim();
    if (!id) continue;
    topics.push({
      id:             id,
      name:           String(row[1]),
      topic:          String(row[2]),
      seed_idea:      String(row[3]),
      scheduled_date: String(row[4]),
      created_at:     String(row[5]),
      vote_count:     voteCounts[id] || 0,
      voters:         voterSets[id]  || []
    });
  }

  topics.sort(function(a, b) {
    return b.vote_count !== a.vote_count
      ? b.vote_count - a.vote_count
      : new Date(a.created_at) - new Date(b.created_at);
  });

  return { topics: topics };
}

function addTopic(body) {
  var name           = String(body.name           || '').trim();
  var topic          = String(body.topic          || '').trim();
  var seed_idea      = String(body.seed_idea      || '').trim();
  var scheduled_date = String(body.scheduled_date || '').trim();

  if (!name)  throw new Error('name is required');
  if (!topic) throw new Error('topic is required');

  var id         = generateUUID();
  var created_at = new Date().toISOString();
  getTopicsSheet().appendRow([id, name, topic, seed_idea, scheduled_date, created_at]);

  return { success: true };
}

function castVote(body) {
  var topic_id = String(body.topic_id || '').trim();
  var voter_id = String(body.voter_id || '').trim();

  if (!topic_id) throw new Error('topic_id is required');
  if (!voter_id) throw new Error('voter_id is required');

  var topicsData = getTopicsSheet().getDataRange().getValues();
  var found = false;
  for (var i = 1; i < topicsData.length; i++) {
    if (String(topicsData[i][0]).trim() === topic_id) { found = true; break; }
  }
  if (!found) throw new Error('topic not found: ' + topic_id);

  var votesSheet = getVotesSheet();
  var votesData  = votesSheet.getDataRange().getValues();
  for (var j = 1; j < votesData.length; j++) {
    if (String(votesData[j][0]).trim() === topic_id &&
        String(votesData[j][1]).trim() === voter_id) {
      return { success: false, reason: 'already_voted' };
    }
  }

  votesSheet.appendRow([topic_id, voter_id]);
  return { success: true };
}
