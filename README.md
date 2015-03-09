# MarkletJS
Bookmarklet library.

usage examples:

```javascript
Marklet('alert("hello world")');
```

```javascript
yourTextareaElement.onInput = function() {
	yourLinkElement.href = Marklet(yourTextareaElement.value);
};
```

___

Copyright (c) 2015 Jonathan Herman. MIT License.
