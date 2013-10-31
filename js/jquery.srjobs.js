// get all jobs from your SR account
function getJobs(url) {
  // SET THESE TWO VARIABLES
  var srCompanyName = "AvantCredit1";
  var srInstalledURL = "http://avantcredit.com/about_us";

  return $.ajax({
    url: url,
    type: "GET",
    dataType: "xml",
    data: { wpp_company: srCompanyName, installed_url: srInstalledURL },
    contentType: "application/jsonp; charset=utf-8",
  });
}

// get an array of departments you have listed
function getDepartments(data) {
  if (data.jobs.job[0]) {
    return data.jobs.job[0].company.company_departments.department;
  }
} 

// create an associative object of deparments 
function setAssociativeDeparments(departmentsArray) {
  var obj = {}
  $.each(departmentsArray, function(index, value) {
    obj[value] = [];
  });
  return obj;
}

// create the associative object with jobs in it now (it already had departments)
function groupJobsInDepartments(departmentsObj, result) {
  // go through each job
  // add it to the associative department obj
  $.map(result, function(value, index) {
    if (value.department != "") {
      departmentsObj[value.department].push(value);
    }
  });
  return departmentsObj;
}

// create the plugin
(function ($) {
  $.fn.smartRecruiterJobs = function() {
    var srUrl = "http://www.smartrecruiters.com/cgi-bin/WebObjects/share.woa/wa/careersite";

    var promise = getJobs(srUrl);
    var el = $(this);

    promise.success(function (data) {
      var result = $.xml2json(data);

      // set hash with departments
      var departmentsObj = setAssociativeDeparments(getDepartments(result));
      var groupedJobs = groupJobsInDepartments(departmentsObj, result.jobs.job);
      
      // loop through the associated job results object and display it
      $.each(groupedJobs, function(index, value) {
        console.log(index, value);
        if (value.length > 0) {
          el.append($('<h4>' + index + '</h4>'));
          $.each(value, function(index, value) {
            el.append('<li>' + value.title + '</li>');
          });
        };
      });
    });

    promise.error(function (e) {
      alert(e.message);
    });
  };
}(jQuery));

