---
title: "Markdown Extended Syntax"
author: "Hunter Yeagley"
date: 2023-11-23T16:28:20+01:00
draft: false
categories: ["Cheat Sheets"]
---


This Markdown cheat sheet provides a quick overview of all the Markdown extended syntax elements. It can't cover every edge case, so if you need more information about any of these elements, refer to the Markdown reference guide for [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Table

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

## Fenced Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Heading ID

### My Great Heading{#custom-id}

## Definition List

term
: definition

## Strikethrough

~~The world is flat.~~

## Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-unstyled}

## Emoji

Copy the emoji shortcode from [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) by clicking on the emoji. That is so funny! :joy:

## Unsupported elements

Hugo does not [support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support) the highlight, subscript, and superscript elements. Use the HTML element itself instead.

### Highlight

I need to highlight these <mark>very important words</mark>.

### Subscript

H<sub>2</sub>O

### Superscript

X<sup>2</sup>
