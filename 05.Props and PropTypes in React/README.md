* ##  Named export and Default Export:

### 1. Default Export: 
In this case, if import occurs by any name, Suppose XYZ, then the default value will be exported. It is generally used to export a single object, function, or variable. Let’s understand with an example-

Create two files. We are creating module.mjs and module2.mjs. We will be performing a default export from module.mjs to module2.mjs

**note**: you can't make a name with js extension if you try to compile it will throw and error


In **module.mjs:**
```jsx
// module.mjs - This is an example of a Default export
const a = 'Subham';
const b = 'Rachita';
const c = 'Aakansha';
const d = 'Subhasish';
const e = 'Bikram';
export default b;
```


In **module2.mjs:**

```jsx
import XYZ from './module.js'
console.log(XYZ);
```
When you do in your terminal
```
node module2.mjs
```
The default exported value, which is ```‘Rachita’```, will be imported. In default Export, the name of Import is Independent of the name of Export

### 2. Named Export:
In this case, we export some specific values. The name of import is dependent on the name of Export which means You can’t use a different name in the Import and Export function. We use Curly brackets for Named export. For example: performing the same export using named export.

In **module.mjs:**
```jsx
const a = 'Subham';
const b = 'Rachita';
const c = 'Aakansha';
const d = 'Subhasish';
const e = 'Bikram';
export default b;
```

In **module2.mjs**:
```jsx
import dza, {a, c, d} from './module2.mjs'
console.log(dza);
console.log(c);
console.log(d);
```
When you do in your terminal
```
node module2.mjs
```
Output will be```‘Rachita’```,```Aakansha``` ,```Subhasish``` .  Name Exports are used to export multiple values.

* ## Creating Navbar Component:
