# Project Structure

The project is divided into a few folders inside the `ui` folder. There components
that can be used inside your forms are lying inside the Forms folder. If you want to
edit its behavior i suggest you to dive into the files.

For my personal use I have decided to directly employ texts. However if you are going to
use them inside other components occasionally it makes sense to pass props such as text when
written as pure components.

For example I have a component called `<FormShare />`

```javascript
const FormShare = () => (
  <div className="form__share">
    <p>You have successfully submitted your form.</p>
  </div>
);
```
Instead of passing the text as it is use a text prop.

```javascript
const FormShare = ({text}) => (
  <div className="form__share">
    <p>{text}</p>
  </div>
);
```
