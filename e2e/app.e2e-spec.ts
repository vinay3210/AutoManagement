import { AutomatedEmployeeManagementSystemPage } from './app.po';

describe('automated-employee-management-system App', function() {
  let page: AutomatedEmployeeManagementSystemPage;

  beforeEach(() => {
    page = new AutomatedEmployeeManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
