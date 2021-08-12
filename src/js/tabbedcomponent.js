export function tabbedComponent() {
  const tabs = document.querySelectorAll('.operations-tab');
  const tabsContainer = document.querySelector(
    '.dashboard-main-operation-tabcontainer'
  );
  const tabsContent = document.querySelectorAll(
    '.dashboard-main-operation-card'
  );
  function tabbed(e) {
    const clicked = e.target.closest('.operations-tab');

    if (!clicked) return;

    tabsContent.forEach((t) => t.classList.remove('active'));
    document
      .querySelector(`.dashboard-main-operation-${clicked.dataset.tab}`)
      .classList.add('active');
  }
  tabsContainer.addEventListener('click', tabbed);
}
