#!/bin/bash
# Program:
#       This program shows "Hello World!" in your screen.
# History:
# 2015/07/16	VBird	First release
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
# cp ./lib/exampleAPI.js ./apis/exampleAPI.js

read -p "input api name: " apiName      # 輸入API名稱
read -p "input api method:  " apiMethod       # 輸入API呼叫方法
# cp ./lib/exampleAPI.js ./apis/${apiName}.js

cd ./apis/
echo "var ins = null;" > ${apiName}.js

echo "class API {" >> ${apiName}.js
echo " apiMethod = '${apiMethod}';" >> ${apiName}.js
echo "  apiPath = '/api/${apiName}';">> ${apiName}.js
echo "  method(ctx, next) {">> ${apiName}.js
echo "    let rs = {};">> ${apiName}.js
echo "    ctx.body = global.rf(0, '', rs);">> ${apiName}.js
echo "  }">> ${apiName}.js
echo "}">> ${apiName}.js

echo "module.exports = (() => {">> ${apiName}.js
echo "  if (ins) {">> ${apiName}.js
echo "    return ins;">> ${apiName}.js
echo "  }">> ${apiName}.js
echo "  ins = new API();">> ${apiName}.js
echo "  return ins;">> ${apiName}.js
echo "})();">> ${apiName}.js

exit 0