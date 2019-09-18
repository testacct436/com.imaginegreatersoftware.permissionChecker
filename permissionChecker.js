

var console=require(['console.js'])
var checkPermissions=(function($,obj){

    /*json object detailing context and permission name, and package name 
    json structure is:
    {context:cordovaContext,permission:permissionStr,package:packageName};
    
    */
var checkCallingPermission=function(obj)
{
    var result=-1;
    var o = obj;
try{
    cordova.exec(function(winParam) {
                      result= winParam;//should be integer value 0,-1,or-2
             },
             function(error) {console.log("error reported :" + error);},
             "com.imaginegreatersofware.checkpermission",
             "checkCallingPermission",
             [o.cordovaContext,o.permissionStr,o.packageName]);
}catch(err)
        {
            console.log('error reported: ' err);
        }
    return result;
}

/*json object detailing context and permission name
json structure is:
    {context:cordovaContext,permission:permissionStr};
*/
var checkSelfPermission=function(obj)
{
    var result = -1;
    var o = obj;
    try{
        cordova.exec(function(winParam) {
                      result= winParam;//should be integer value 0,-1,or-2
             },
             function(error) {console.log("error reported :" + error);},
             "com.imaginegreatersofware.checkpermission",
             "checkselfPermission",
             [o.cordovaContext,o.permissionStr]);

    }catch(err)
        {
            console.log('error reported: ' err);
        }
    return result;
}

module.exports={
    checkCallingPermission:checkCallingPermission,
    checkSelfPermission:checkSelfPermission
}
    
    return{
        checkPermissions
    }
})(jQuery);