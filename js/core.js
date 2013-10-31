// SmartRecruitor (SR) JS API.  All trademarks belong to SmartRecruitor
// To launch this locally use: 
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security &

srUrl = "http://www.smartrecruiters.com/cgi-bin/WebObjects/share.woa/wa/careersite"
srCompanyName = "AvantCredit1"
srInstalledURL = "http://avantcredit.com/about_us"

function getJobs(url) {
  $.ajax({
    url: srUrl,
    type: "GET",
    dataType: "xml",
    data: {wpp_company: srCompanyName, installed_url: srInstalledURL},
    contentType: "application/jsonp; charset=utf-8",
    success: function (data) {
      console.log($.xml2json(data));
      // return ;
    },
    error: function (e) {
        alert(e.message);
    }
  });
}

$(function(){
  var result = getJobs(srUrl);

})

// http://www.smartrecruiters.com/cgi-bin/WebObjects/share.woa/wa/careersite?wpp_company=AvantCredit1&installed_url=http://avantcredit.com/about_us

// input variables for company name and URL where this plugin is placed
// Grab XML result from a GET
// Convert to JSON
// $.each through each of the results

// then refactor to pass a param to group by department