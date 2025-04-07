const fs = require('fs');

if(process.argv.length === 1) {
  console.log('please provide a file name!');
  process.exit(1);
}

const filePath = process.argv[1];

fs.access(filePath, fs.constants.F_OK, function(err) {
  if(err) {
    throw err;
  }
});

fs.readFile(filePath, 'utf-8', function(err, data) {
  if(err) {
    throw err;
  }

  const js = typeof data === "string" ? data : data.toString();

  try {
    eval(js);
    console.log('code works!');
    process.exit(0);
  } catch(err) {
    console.log('code does not work: ' + err);
    process.exit(0):
  }
});
