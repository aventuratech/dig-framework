Views
=====

Views are prebuilt layouts for the main application content, which we refer to as the form.

The views are built on Material UI and respect the MUI / Dig theme.

Form
----

The simplest view is the `Form` view. It consist of a blank form body with a title and optional toolbar.

![Form View Screenshot](assets/view-form.png)

### Options

Prop | Type | Description
-----|------|------------
classes | object | override core classes
title | string | page title
subtitle | string | action title, renders in form toolbar
toolbar | node | optional toolbar

### Example

```javascript
class FormDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {classes} = this.props;
    const viewOptions = {
      form: "Form",
      title: "Post Manager",
      subtitle: "View all posts"
    };

    return <View {...viewOptions}>
      <div className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>Blank Slate</Typography>
        <Typography variant="body1" align="center">The form view is an empty form with a Title and optional toolbar.</Typography>
      </div>
    </View>;
  }
}
```

[View Complete Source](../src/demo/components/pages/FormDemo/FormDemo.jsx)

### Example with Toolbar

This example is a little more fun and includes a custom toolbar as well as the Dig State to render a message for 
the currently logged in user.

Note that the toolbar is made up of standard MaterialUI buttons. We avoid syntactical sugar, and don't extend core 
components unless there is a compelling reason to do so.

![Form View Screenshot](assets/view-form-with-toolbar.png)

```javascript
class FormDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    console.log('Hi ' + this.props.digUser.name + '!');
  }

  renderToolbar = () => {
    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <HandIcon/>
        </IconButton>
      </div>
    )
  }

  render() {
    const {classes} = this.props;
    const viewOptions = {
      form: "Form",
      title: "Post Manager",
      subtitle: "View all posts",
      toolbar: this.renderToolbar()
    };

    return <View {...viewOptions}>
      <div className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>Blank Slate</Typography>
        <Typography variant="body1" align="center">The form view is an empty form with a Title and optional toolbar.</Typography>
      </div>
    </View>;
  }
}
```

[View Complete Source](../src/demo/components/pages/FormDemo/FormDemo.jsx)