var appRouter = function (app) {
    
    app.get("/appNames", (req, res)=> {
      var appNamesProvider = { "key": "value", "another key": "value" };
      res.json(appNamesProvider);    
    });
  
    app.get("/subAppNames/:name", function (req, res) {
      var name = req.params.name;
      
      switch(name) {
              case 'Examiner':
              var examinerInfo =["examinerData1","examinerData2","examinerData3","examinerData4"];
              res.send(examinerInfo.toString());
              break;
              case 'Phycon':
              var phyconInfo =["PhyconData1","PhyconData2","PhyconData3","PhyconData4"];
              res.send(phyconInfo.toString());
              break;
              case 'CLM':
              var clmInfo =["clmInfo1","clmInfo2","clmInfo3","clmInfo4"]; 
              res.send(clmInfo.toString());
              break;
              case 'DSI':
              var dsiInfo =["dsiInfo1","dsiInfo2","dsiInfo3","dsiInfo4"]; 
              res.send(dsiInfo.toString());
              break;
              case 'PSI':
              var psiInfo =["psiInfo1","psiInfo2","psiInfo3","psiInfo4"]; 
              res.send(psiInfo.toString());
              break;
              default:
              res.send("Inavlid End Point");
              break;
          } 
    });
  }
    module.exports = appRouter;