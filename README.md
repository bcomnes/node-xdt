# node-xdt
Node.js module to transform Web.config(XML) using xdt(Microsoft Xml Document Transformation)

```
npm install node-xdt --save

```

```
var xdt = require('node-xdt');

var options = {
	 src: '{path}/Web.config',
     dest: '{outpath}/Web.config',
     transform:'{path}/Web.Release.config'
};

xdt(options,function(error){
	//....
});
```



https://www.nuget.org/packages/Microsoft.Web.Xdt/
https://www.nuget.org/packages/WebConfigTransformRunner/1.0.0.1
https://github.com/erichexter/WebConfigTransformRunner

