const fs = require('fs');
// read first few bytes to check if it has alpha channel
// But wait, the file output already said "RGB", not "RGBA". So they don't have transparency.
