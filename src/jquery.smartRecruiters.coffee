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
      result = $.xml2json data
      jobsByDepartment = {}
      for job in result.jobs.job
        if job.department isnt ""
          jobsByDepartment[job.department] ||= []
          jobsByDepartment[job.department].push job
      output = ""
      for department, jobs of jobsByDepartment
        output += $(document.createElement(options.departmentHtmlElement)).text(department)[0].outerHTML
        output += "<ul>"
        output += "<li><a href='#{job.detail_url}' target='_blank'>#{job.title}</a></li>" for job in jobs
        output += "</ul>"
      $(@).append output  
) jQuery