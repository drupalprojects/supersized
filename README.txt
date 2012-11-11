
CONTENTS OF THIS FILE
---------------------

 * Author
 * Description
 * Installation
 * Usage
 * Context
 * Themes

AUTHOR
------
Aaron Fan (http://drupal.org/user/576672)

DESCRIPTION
-----------
This module make it easy to implement Supersized JQuery plugin into Druapl 
system. All available Supersized JQuery settings are configurable by UI.

A field type "Supersized Slide" comes with this module, and obviously, 
Supersized background slides are managed by fields of node.

INSTALLATION
------------
Install this module as usual.  Without jquery callback, creatives are limited.
Until now, the latest released version does not comes with the slide query. 
You should download the version comes with "after slide" callback option from
https://github.com/f3ndot/supersized/tree/3718ae83f0945e327cc09530b959c5a8b049871f
decompress the downloaded file and place it in the js folder.  So the directory
should look like this:
supersized/js/supersized/{content of depressed file}


USAGE
-----
1. Add a "Supersized Slide" field to any content type, in most of the cases, 
this would be a multiple value field.
2. Configure the Supersized options such as transition, interval, etc...
3. Create a new content and upload beautiful images using the Supersized field.
Yes, there you go! Supersized is just that easy to setup.

CONTEXT
---------
Enabled Supersized Context, you will find a new condition and a reaction.  Use
this new condition to determine weather a page has Supersized, and use this new
reaction to assign node with Supersized.

For example, you may want to have Supersized on a page which is created by 
Views, and the path is `/latest-blog`.  You should create a node that has 
Supersized field, upload your beautiful pictures and save it.  You will then 
create a new context, condition with be path: /latest-blog, and your reaction
would be Supersized: a chosen node.

THEMES
------
Theme functions as follow:
theme_supersized_arrow_nav()
theme_supersized_progress_bar()
theme_supersized_thumbnail_navigation()
theme_supersized_thumb_links()
theme_supersized_slide_links()
theme_supersized_control_bar()

The default them comes with Supersized JQuery plugin supports 'image_path'. The
default path would be /js/supersized/slideshow/img, however, if your theme has 
/images/supersized/ this folder, images will be crab from this folder instead.

AFTER SLIDE CALLBACK
--------------------
Define a js function and name it `supersized_slide_callback`.  This function
will be called after each slides.

/**
 * Supersized slide callback function.
 */
function am_billboard_slide_callback() {
  var title = api.getField('title');
  var body = api.getField('body');
  // Do something with the slide title and body...
}
