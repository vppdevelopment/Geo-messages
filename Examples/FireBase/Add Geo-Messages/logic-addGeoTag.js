var factorGeoTag = 0.04;

function addGeoTag()
{
    var daysToExpire = 2*86400000;
    var dateCreated = Firebase.ServerValue.TIMESTAMP;
    addMessage(calculateTag(),
        {
            message: message.value,
            date: dateCreated,
            expire: daysToExpire,
            lat: latitude.value,
            long: longitude.value
        }
    );
}

function calculateTag()
{
    var tagLatitude = Math.ceil(latitude.value/factorGeoTag);
    var tagLongitude = Math.ceil(longitude.value/factorGeoTag);
    return tagLatitude+','+tagLongitude;
}