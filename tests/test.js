const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");

  const expected = [{id: 1, name:'Alina', location: 'Moscow'}];

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('get data method', (t)=>{

  runDbBuild(function(err, res){
  if(err)
  throw Error
    getData((error,result)=>{
      if (error) {
        t.error(error, "error");
        t.end();
      }else{

        t.deepEqual(result,expected, 'should be equal');
        t.end();
      }
    });
    })

  })
