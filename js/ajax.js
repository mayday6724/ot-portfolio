// JavaScript Document

$(document).ready(function () {
  var content;
  $.get("section.html", function (data) {
    content = data;
    $("section").append(content);
  });

  //getcon('js/list.json');

  var pn = $("body").data("pagenum");

  switch (pn) {
    case 0:
      getcon2("js/list.json");
      break;

    case 1:
      getcon("js/list.json");
      break;

    case 2:
      getcon3("js/list.json");
      break;
  }

  $("article").css({ display: "none" }).fadeIn(1000);
});

function getcon(filename) {
  $.getJSON(filename, function (data) {
    $("article").empty();

    $.each(data, function (index, en) {
      var html = '<a class="box">';
      html += '<img src="' + en["圖片"] + '" class="imgbox">';
      html += "<h3>" + en["品名"] + "</h3>";
      html += "<p>" + en["介紹"] + "</p>";
      html += "</a>";

      if (en["分類"] == "體驗") {
        $("article").append(html);
      }
    });
  });

  return false;
}

function getcon2(filename) {
  $.getJSON(filename, function (data) {
    $("article").empty();

    $.each(data, function (index, en) {
      var html = '<a class="box">';
      html += '<img src="' + en["圖片"] + '" class="imgbox">';
      html += "<h3>" + en["品名"] + "</h3>";
      html += "<p>" + en["介紹"] + "</p>";
      html += "</a>";

      if (en["分類"] == "手工藝") {
        $("article").append(html);
      }
    });
  });

  return false;
}

function getcon3(filename) {
  $.getJSON(filename, function (data) {
    $("article").empty();

    $.each(data, function (index, en) {
      var html = '<a class="box">';
      html += '<img src="' + en["圖片"] + '" class="imgbox">';
      html += "<h3>" + en["品名"] + "</h3>";
      html += "<p>" + en["介紹"] + "</p>";
      html += "</a>";

      if (en["分類"] == "認知") {
        $("article").append(html);
      }
    });
  });

  return false;
}
