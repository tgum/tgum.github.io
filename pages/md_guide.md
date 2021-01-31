<title>Markdown guide</title>

# Markdown guide

### simple text
```markdown
	this is some text
```

result:

this is some text

### bold text

```
	**this is bold text**
	__you can also use undescores__
```

result:

**this is bold text**     
__you can also use underscores__     

### italic text

```
	*this is italic text*
	_you can use underscores like for bold text_
```

result:

*this is italic text*     
_you can also use underscores like for bold text_     

### headers

```markdown
	# this is a top level header
	## this is a second level header
	...
	###### this is a bottom level header
```

result:

# this is a top level header
## this is a second level header
...
###### this is a bottom level header

### code blocks

```markdown
	```markdown
		this is in a code block
	```
```

result:

```markdown
	this is in a code block
```

### data tables

```markdown
	| first column   |   second column     |
	|----------------|---------------------|
	| first row      | some text           |
	|second row      | some more text      |
```

result:

| first column   | second column 			 |
|----------------|---------------------|
| first row      | some text 					 |
|second row 		 | some more text 		 |

### links

```markdown
	[an example link](https://example.com)
```

result:

[an example link](https://example.com)

### lists

```markdown
	- an
	- unordered
	- list
	1. an
	1. ordered
	1. list
```

result:

- an
- unordered
- list
1. an
1. ordered
1. list

### srikethrough

```markdown
	~~this text is strikedthrough~~
```

result:

~~this text is strikedthrough~~

### images

```markdown
	![a squirrel picture](images/squirrel.jpg)
```

result:

![a squirrel picture](images/squirrel.jpg)

### HTML

```markdown
	you <em>can</em> <strong>also</strong> add HTML in markdown
```

result:

you <em>can</em> <strong>also</strong> add HTML in markdown

## summary

```markdown
	you can type normal text in markdown

	*you use single stars to make italic text*
	**you use double stars to make bold text**
	_you can also use __underscores__ for both bold and italic text_

	# you can make top level headers with one # sign
	# you can make second level headers with two # signs
	###### and also sixth level (bottom level headers) headers with six # signs

	```markdown
		you can make code blocks by putting three backsticks, the name of     
		the language, enter the code and put three backsticks at the end
	```

	[To make a link put the name of the link in square brackets     
	and then put the URL in parentheses.](https://like.that)

	- to
	- make an
	- unordered list
	- use - at the
	- start of each item
	1. for ordered
	1. lists use
	1. 1.

	~~To make strikethoughs put ~~ around your text.~~

	![To put images in Markdown is very similar to links except that     
	you put a ! at the beginning and instead of a website URL you indicate    
	the path to the image](/image/myImage.jpg)

	and finaly <em>you</em> can embedd <strong>HTML</strong> in Markdown.
```

learn more about markdown on [daring fireballs](https://daringfireball.net/projects/markdown/) website     
or on [commonmark](https://commonmark.org/)
