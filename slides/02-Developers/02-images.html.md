---
title: Images
chapter: Writing Code

layout_data:
  description: |
  examples:
    - title: An Accessible Inline Image
      description: |
        This is an image with an alt text. Turn on VoiceOver if you are on a Mac, tab
        to the Editor Output section, use <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Shift</kbd> 
        + <kbd>Down Arrow</kbd> to select the section and use <kbd>Ctrl</kbd> + <kbd>Opt</kbd> 
        + <kbd>Right Arrow</kbd>
        to navigate to these images. VoiceOver will announce the alt text. For the second image below, VoiceOver
        will not announce anything meaningful since there is no alt text.
      code: |
        <img
          alt="Teach Access Bridge logo"
          src="./images/inline-image.png"
        />

    - title: Inaccessible Inline Image Exercise
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
        
    - title: Inaccessible Embedded Image Exercise
      description: |
        An image is used as a submit button. It does not have alt text. Turn on VoiceOver and listen to how it is read. Add an `alt`
        attribute "Submit" to this image to make it accessible and test it again with VoiceOver.
      code: |
        <form action="demo_form.asp">
          First name: <input type="text" name="fname"><br>
          <input type="image" src="inline-image-59KBw1H.png" alt="Submit" width="48" height="48">
        </form>

      assertion: |
        var img = dom.querySelector('input');
        assert(
          img.hasAttribute("alt"),
          "It doesn't look like you added an alt to your image."
        );


    - title: Inline Video Exercise with 'iframe' Tag
      description: |
        You can simply use the 'iframe' tag to embed the video. VoiceOver will read out the title and the botton of the video. 

      code: |
        <iframe width="560" height="315" alt="This is a video"
          src="https://www.youtube.com/embed/mtf7hC17IBM" 
          frameborder="0" allowfullscreen>
        </iframe>
---
Screen readers interact with text on the screen. So, to convey the meaning of 
an image to screen reader users,
we put an accessible text label in the HTML. If an image is decorative, we can hide it from screen
reader users by giving it an empty label (`alt=""`). After the completing the 
exercise below, you can learn a lot more about writing good alt text for images 
by checking out [WebAIM's resource on the 
topic](http://webaim.org/techniques/alttext/).
