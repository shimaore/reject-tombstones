module.exports = {
  _id: '_design/reject_tombstones'
, validate_doc_update: 'function(newDoc, oldDoc) { if(oldDoc) { return; } if(newDoc._deleted) { throw({forbidden : "Deleted document rejected"}); } }'
}
