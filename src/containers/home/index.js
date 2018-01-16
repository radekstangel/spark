// dependencies
import React from 'react';

// components
import Button from '../../components/button';

const Habits = () => (
  <div>
    <h1>Home Page</h1>
    <p>
      One morning, when Gregor Samsa woke from troubled dreams,
      he found himself transformed in his bed into a horrible vermin.
      He lay on his armour-like back,
      and if he lifted his head a little he could see his brown belly,
      slightly domed and divided by arches into stiff sections.
    </p>
    <p>
      The bedding was hardly able to cover it
      and seemed ready to slide off any moment.
      His many legs, pitifully thin compared with the size of the rest of him,
      waved about helplessly as he looked.
    </p>
    <Button to="/page1" contrast>Page 1&nbsp;&raquo;</Button>
    <Button to="/page2">Page 2&nbsp;&raquo;</Button>
  </div>
);

export default Habits;
