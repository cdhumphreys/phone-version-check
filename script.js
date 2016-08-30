var getPhoneDetails = function() {
        var ua = navigator.userAgent.toLowerCase();

        var phoneVer;
        var phoneType;

        var phoneTypeIndex = ua.indexOf('iphone os');

        if (phoneTypeIndex !== -1) {
            phoneType = 'iphone';
            phoneVer = ua.substring(phoneTypeIndex + 'iphone os'.length, ua.indexOf('like', phoneTypeIndex));
            phoneVer = phoneVer.split('_');
        } else {
            phoneTypeIndex = ua.indexOf('android');

            if (phoneTypeIndex === -1) {
                phoneVer = 'not an iphone or android';
            } else {
                phoneType = 'android';
                phoneVer = ua.substring(phoneTypeIndex + 8, ua.indexOf(';', phoneTypeIndex));
                phoneVer = phoneVer.split('.');
            }

        }

        var majorNum = [];
        var minorNums = [];

        if (typeof phoneVer === "object") {

            majorNum = phoneVer.slice(0, 1);

            minorNums = phoneVer.slice(1).join('');

            phoneVer = majorNum.concat(minorNums);
            phoneVer = parseFloat(phoneVer.join('.'));
        }
        return {
            phoneType: phoneType,
            os: phoneVer
        };
    };

  // Example
  var phoneDetails = getPhoneDetails();

  if (phoneDetails.phoneType === 'android' && phoneDetails.os < 5 || phoneDetails.phoneType === 'iphone' && phoneDetails.os < 8) {
    // do something for android devices less than 5 or iphones with iOS under version 8
  }
