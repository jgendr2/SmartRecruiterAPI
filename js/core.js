// SmartRecruitor (SR) JS API.  All trademarks belong to SmartRecruitor
// To launch this locally use and run using MAMP/WAML (any local web server)
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security &

srUrl = "http://www.smartrecruiters.com/cgi-bin/WebObjects/share.woa/wa/careersite"

// Set these two variables
srCompanyName = "AvantCredit1"
srInstalledURL = "http://avantcredit.com/about_us"

function getJobs(url) {
  return $.ajax({
    url: srUrl,
    type: "GET",
    dataType: "xml",
    data: { wpp_company: srCompanyName, installed_url: srInstalledURL },
    contentType: "application/jsonp; charset=utf-8",
  });
}

function getDepartments(data) {
  if (data.jobs.job[0]) {
    return data.jobs.job[0].company.company_departments.department;
  }
} 

$(function(){

  var promise = getJobs(srUrl);
  var el = $('#list-jobs');

  promise.success(function (data) {
    var result = $.xml2json(data);

    $.each(result.jobs.job, function(index, value) {
      el.append($('<li>' + value.title + '</li>'));
    });
  });

  promise.error(function (e) {
    alert(e.message);
  });
})

// http://www.smartrecruiters.com/cgi-bin/WebObjects/share.woa/wa/careersite?wpp_company=AvantCredit1&installed_url=http://avantcredit.com/about_us

// input variables for company name and URL where this plugin is placed
// Grab XML result from a GET
// Convert to JSON
// $.each through each of the results

// then refactor to pass a param to group by department



