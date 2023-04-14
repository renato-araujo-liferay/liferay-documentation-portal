---
sidebar_position: 1
---

# Click

A component called Click and their respective actions

- `Click` → `Click.click()`

## How to use?
```
Click.click(locator1="//div[contains(@id,'navbar')]/ul/li/a[normalize-space()='${key_pageName}']");
```

## Click Information

Definition of `click(locator1)`:

```click(locator1)
Arguments

locator         <WebElement><str>

This action will search for a specific Element, move the mouse over to the component
and perform a right click mouse event. the Clicks target is identified by locator.

See the Locating elements section for details about the locator syntax. 
When using the default locator strategy, buttons are searched using:
id    |   class   |   name    |   value     |   xpath
```

## Step By Step


```
	function click {
        # Step 1 - Wait For Page Loads
		WaitForSPARefresh();

        # Step 2 - Wait for element be visible
		selenium.waitForVisible();

        # Step 3 - Move`s the mouse over the specific element
		selenium.mouseOver();

        # Step 4 - Perform a right click mouse event
		selenium.click();

        # Step 5 - Assert any message return for Selenium
		selenium.assertJavaScriptErrors();

        # Step 6 - Assert any message return for Liferay
		selenium.assertLiferayErrors();
	}
```
```mermaid
journey
    title Macro Behavior
    section Initial Macro Event
      Wait for page load: 1: Selenium
      Wait for element be visible: 2: Selenium
      Move mouse over element: 3: Selenium
      Right click mouse: 4: Selenium
      Assert Javascript return: 5: Selenium,Javascript
      Assert Selenium return: 6: Selenium
    section End of Macro Event
      end: 7
```


types of element is now available at [https://liferay.com.br/webElements](http://localhost:3000/my-react-page).

Similar functions is also available at our repository: [https://liferay.com.br/webElements](http://localhost:3000/my-react-page).
