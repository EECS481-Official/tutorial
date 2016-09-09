---
title: Images
chapter: Writing Code

layout_data:
  description: |
  examples:
    - title: An Accessible Inline Image
      description: |
        This is an image with an alt text. Turn on VoiceOver if you are on a Mac, tab
        to the Editor Output section, and use <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Right Arrow</kbd>
        to navigate to these images. VoiceOver will announce the alt text. For the second image below, VoiceOver
        will not announce anything meaningful since there is no alt text.
      code: |
        <img
          alt="Teach Access Bridge logo"
          src="./images/inline-image.png"
        />

    - title: Inaccessible Inline Image exercise
      description: |
        This is an image without alt text. Turn on VoiceOver and listen to how it is read. Add an `alt`
        attribute "Facebook logo" to this image to make it accessible and test it again with VoiceOver.
      code: |
        <img
          src="./images/inline-image.png"

        />

      assertion: |
        var img = dom.querySelector('img');
        assert(
          img.hasAttribute("alt"),
          "It doesn't look like you added an alt to your image."
        );
---
Screen readers interact with text on the screen. So, to convey the meaning of 
an image to screen reader users,
we put an accessible text label in the HTML. If an image is decorative, we can hide it from screen
reader users by giving it an empty label (`alt=""`). After the completing the 
exercise below, you can learn a lot more about writing good alt text for images 
by checking out WebAIM's resource on the 
topic. This document consists of different parts.
Click [here](http://webaim.org/techniques/alttext/#basics/) for a basic overview of how alternative text works.
Furthermore, by pressing on [this link](http://webaim.org/techniques/alttext/#context/) you can learn more about the role context plays in generating an appropriate alternative text.
Next, you can learn more about functional images [here](http://webaim.org/techniques/alttext/#functional/), and about decorative images [here](http://webaim.org/techniques/alttext/#decorative/).
Finally, for a more advanced alternative text tutorial, press [this link](http://webaim.org/techniques/alttext/#advanced).