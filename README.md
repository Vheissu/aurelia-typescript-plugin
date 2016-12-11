# Aurelia Tabs
A dependency free tabs component for your Aurelia applications. Allows you to toggle between sections of content, with supports for dynamically composing views with optional data.

## Installation
1. In your console type: ``npm install aurelia-tabs --save`` or for Jspm: ``jspm install aurelia-tabs``
2. During the bootstrapping phase, register the plugin:
```
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-tabs')
    .developmentLogging();

  aurelia.start().then(a => a.setRoot());
}
```

## Usage
This plugin is comprised of multiple components to be used together.

### Tabs
The tabs component is where your clickable tabs are generated. It has two bindable values, one of which is required ``tabs``

#### Valid data
Passing through tabs to your object they need to be defined in a standardised way. The plugin expects an array of one or more objects which contain at least a ``id`` property and a ``label`` property. The ``id`` property is used to identify which section this tab will open as defined in the sections element. The ``label`` property is the value displayed to the user. A third optional property ``selected`` allows us to specify if this tab is the default selected tab.

**In your ViewModel**:
```
export class ViewModel {
    constructor() {
        this.myTabValues = [
            {id: 'section-one', label: 'My First Section', selected: true},
            {id: 'section-two', label: 'Users'},
            {id: 'section-three', label: 'Browse Items'}
        ];
    }
}
```

**In your View:**
``<tabs tabs.bind="myTabValues"></tabs>``

### Tab Sections
Once you have your tabs setup, you will want to create tab sections which wrap tab-section items. We will use the example above and add in the sections related to each defined tab.

**In your ViewModel**:
```
export class ViewModel {
    constructor() {
        this.myTabValues = [
            {id: 'section-one', label: 'My First Section', selected: true},
            {id: 'section-two', label: 'Users'},
            {id: 'section-three', label: 'Browse Items'}
        ];
    }
}
```

**In your View:**
```
<tabs tabs.bind="myTabValues"></tabs>

<tab-sections>

</tab-sections>
```

We have a basic skeleton tab application, but no tabs to switch between. Lets add some individual tab sections now.

**In your View:**
```
<tabs tabs.bind="myTabValues"></tabs>

<tab-sections>
    <tab-section section="section-one">
        <h1>Hello</h1>
        <p>This is some basic HTML content within a tab section.</p>
    </tab-section>
    <tab-section section="section-two" view-model="myViewModel"></tab-section>
    <tab-section section="section-two" view-model="myViewModel" view-content="myViewContent"></tab-section>
</tab-sections>
```

You can see we used the ``<tab-section>`` attribute three different ways. The first we just specified some content right between the opening and closing tabs. The second we specified a property called ``view-model`` which allows us to dynamically render a ViewModel using the ``<compose>`` element and lastly, we do the same thing but pass through an object of data (like we would to the ``<compose>`` element).
