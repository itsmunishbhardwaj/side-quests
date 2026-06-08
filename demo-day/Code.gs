// Google Apps Script — paste this entire file into Extensions → Apps Script
// Then set SPREADSHEET_ID below and deploy as a Web App.

var SPREADSHEET_ID    = '1HySLjPb9qzUjlwMLsUEmQrkrL-ZkhddKDpwGG4vv2MU';
var TOPICS_SHEET      = 'Topics';
var VOTES_SHEET       = 'Votes';
var SCHEDULE_SHEET    = 'Schedule';
var PRESENTERS_SHEET  = 'Presenters';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function getTopicsSheet()     { return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(TOPICS_SHEET); }
function getVotesSheet()      { return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(VOTES_SHEET); }

// Lazily create Schedule/Presenters sheets so existing deployments self-heal.
function getOrCreateSheet(name, headerRow) {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headerRow);
  }
  return sheet;
}
function getScheduleSheet()   { return getOrCreateSheet(SCHEDULE_SHEET,   ['id', 'date', 'host', 'created_at']); }
function getPresentersSheet() { return getOrCreateSheet(PRESENTERS_SHEET, ['schedule_id', 'name', 'created_at']); }

function doGet(e) {
  var result;
  try {
    var action = e.parameter.action || 'getTopics';
    if      (action === 'getTopics')   result = getTopics();
    else if (action === 'getSchedule') result = getSchedule();
    else                               result = { error: 'Unknown action: ' + action };
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
    if      (action === 'addTopic')        result = addTopic(body);
    else if (action === 'vote')            result = castVote(body);
    else if (action === 'addScheduleDate') result = addScheduleDate(body);
    else if (action === 'setHost')         result = setHost(body);
    else if (action === 'addPresenter')    result = addPresenter(body);
    else if (action === 'removePresenter') result = removePresenter(body);
    else                                   result = { error: 'Unknown action: ' + action };
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

// ── SCHEDULE ─────────────────────────────────────────────────────────────────

function getSchedule() {
  var schedData      = getScheduleSheet().getDataRange().getValues();
  var presentersData = getPresentersSheet().getDataRange().getValues();

  var presentersByDate = {};
  for (var i = 1; i < presentersData.length; i++) {
    var sid  = String(presentersData[i][0]).trim();
    var name = String(presentersData[i][1]);
    if (!sid) continue;
    if (!presentersByDate[sid]) presentersByDate[sid] = [];
    presentersByDate[sid].push(name);
  }

  var rows = [];
  for (var k = 1; k < schedData.length; k++) {
    var row = schedData[k];
    var id  = String(row[0]).trim();
    if (!id) continue;
    rows.push({
      id:         id,
      date:       String(row[1]),
      host:       String(row[2]),
      created_at: String(row[3]),
      presenters: presentersByDate[id] || []
    });
  }

  rows.sort(function(a, b) {
    var da = new Date(a.date), db = new Date(b.date);
    if (isNaN(da) && isNaN(db)) return 0;
    if (isNaN(da)) return 1;
    if (isNaN(db)) return -1;
    return da - db;
  });

  return { schedule: rows };
}

function addScheduleDate(body) {
  var date = String(body.date || '').trim();
  var host = String(body.host || '').trim();
  if (!date) throw new Error('date is required');

  var sheet = getScheduleSheet();
  var data  = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][1]).trim() === date) {
      return { success: false, reason: 'date_exists' };
    }
  }

  var id         = generateUUID();
  var created_at = new Date().toISOString();
  sheet.appendRow([id, date, host, created_at]);
  return { success: true, id: id };
}

function setHost(body) {
  var schedule_id = String(body.schedule_id || '').trim();
  var host        = String(body.host        || '').trim();
  if (!schedule_id) throw new Error('schedule_id is required');

  var sheet = getScheduleSheet();
  var data  = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === schedule_id) {
      sheet.getRange(i + 1, 3).setValue(host); // column C = host
      return { success: true };
    }
  }
  throw new Error('schedule row not found: ' + schedule_id);
}

function addPresenter(body) {
  var schedule_id = String(body.schedule_id || '').trim();
  var name        = String(body.name        || '').trim();
  if (!schedule_id) throw new Error('schedule_id is required');
  if (!name)        throw new Error('name is required');

  var schedSheet = getScheduleSheet();
  var schedData  = schedSheet.getDataRange().getValues();
  var found = false;
  for (var i = 1; i < schedData.length; i++) {
    if (String(schedData[i][0]).trim() === schedule_id) { found = true; break; }
  }
  if (!found) throw new Error('schedule row not found: ' + schedule_id);

  getPresentersSheet().appendRow([schedule_id, name, new Date().toISOString()]);
  return { success: true };
}

// Removes the first matching (schedule_id, name) row. If duplicates exist,
// the user can click × again — predictable, no surprise mass-delete.
function removePresenter(body) {
  var schedule_id = String(body.schedule_id || '').trim();
  var name        = String(body.name        || '').trim();
  if (!schedule_id) throw new Error('schedule_id is required');
  if (!name)        throw new Error('name is required');

  var sheet = getPresentersSheet();
  var data  = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === schedule_id &&
        String(data[i][1]).trim() === name) {
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }
  return { success: false, reason: 'not_found' };
}
