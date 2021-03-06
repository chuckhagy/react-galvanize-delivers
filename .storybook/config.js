import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  require('../src/components/MenuItemComponent.story');
  require('../src/components/MenuComponent.story');
  require('../src/components/OrderTableComponent.story');
  require('../src/components/OrderFormComponent.story');
  require('../src/components/OrderPageLayout.story');
}
configure(loadStories, module);
