---
sidebar_position: 1
---

# Button

A component called Button and their respective actions

- `Click` → `Button.click()`

## Click Information

Definition of `click()`:

```click()

Arguments

locator         <WebElement><str>

This action will search for a specific Button and move the mouse over there the component
and perform a right click mouse event. the Clicks the button identified by locator.

See the Locating elements section for details about the locator syntax. 
When using the default locator strategy, buttons are searched using:
id    |   class   |   name    |   value     |   xpath
```

types of element is now available at [https://liferay.com.br/webElements](http://localhost:3000/my-react-page).

## Click and Drag Information

Definition of `clickAndDrag()`:

```clickAndDrag ()

Arguments

locator         <WebElement><str>
locator2        <WebElement><str>

his action will search for two different types of Buttons. this action will  move the mouse over the first element and perform a long press right click mouse event and move over the second element. after the element has the same position at the second element. after this last condition the script will release the hold action

See the Locating elements section for details about the locator syntax. 
When using the default locator strategy, buttons are searched using:
id    |   class   |   name    |   value     |   xpath
```

types of element is now available at [https://liferay.com.br/webElements](http://localhost:3000/my-react-page).