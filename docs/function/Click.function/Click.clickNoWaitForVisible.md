

# clickNoWaitForVisible

A component called Click and their respective actions

- `Click` → `Click.clickNoWaitForVisible()`

## Click Information

Definition of `clickNoWaitForVisible()`:

```clickNoWaitForVisible()
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
    function clickNoWaitForVisible {
        
        # Step 1 - Wait For Page Loads
		WaitForSPARefresh();

        # Step 2 - Move`s the mouse over the specific element
		selenium.mouseOver();

        # Step 3 - Perform a right click mouse event
		selenium.click();

        # Step 4 - Assert any message return for Selenium
		selenium.assertJavaScriptErrors();

        # Step 5 - Assert any message return for Liferay
		selenium.assertLiferayErrors();
	}
```
## Behavior
```mermaid
journey
    title Macro Behavior
    section Initial Macro Event
      Wait for page load: 1: Selenium
      Move mouse over element: 2: Selenium
      Right click mouse: 3: Selenium
      Assert Javascript return: 4: Selenium,Javascript
      Assert Selenium return: 5: Selenium
    section End of Macro Event
      end: 6
```

types of element is now available at [https://liferay.com.br/webElements](http://localhost:3000/my-react-page).

Similar functions is also available at our repository: [https://liferay.com.br/webElements](http://localhost:3000/my-react-page).
