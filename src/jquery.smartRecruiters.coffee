(($) ->
  $.fn.smartRecruiters = (options) ->
    defaults = 
      pageUrl: window.location.href
      departmentHtmlElement: 'h4'
    options = $.extend {}, defaults, options
    $.ajax(
      url: "http://www.smartrecruiters.com/cgi-bin/WebObjects/share.woa/wa/careersite"
      type: "GET"
      dataType: "xml"
      data:
        wpp_company: options.companyName
        installed_url: options.pageUrl
      contentType: "application/jsonp; charset=utf-8"
    ).done (data) =>
      jobsByDepartment = {}
      for job in $.xml2json(data).jobs.job
        (jobsByDepartment[job.department] ||= []).push job if job.department isnt ""
      for department, jobs of jobsByDepartment
        ul = $("<ul>").append($("<li>").append($("<a>").attr(href: job.detail_url, target: '_blank').text(job.title)) for job in jobs)
        $("<#{options.departmentHtmlElement}>").text(department).after(ul).appendTo(@)
) jQuery