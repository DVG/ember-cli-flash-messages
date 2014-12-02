# Flash-messages

This addon allows you to manage flash messages in your ember application. The original code for this comes from the blog entry here by Lauren Elizabeth Tan (@sugarpirate): https://medium.com/delightful-ui-for-ember-apps/adding-flash-messages-to-an-ember-app-437b13e49c1b

I'm mostly packaging this up for convenience for myself.

## Installation

* `npm install flash-messages --save`

## Usage

### Templates

```hbs
{{#each flash in flashes.content}}
  {{flash-message flash=flash}}
{{/each}}
```

### Controllers

```javascript
actions: {
  postComment: function(){
    this.get('flashes').success('Comment posted'); 
    // this.get('flashes').danger('Failed to post comment.');
    // info and warning are also possibilities
  } 
}
```
