var App = function(id, opt) {
    this.container = $(id);
    this.settings = opt || {};
    this.mainMenuBar = $('<ul class="app_main_menu_bar"></ul>');
    this.container.append(this.mainMenuBar);
    if(!!this.settings.toolbar) {
        this.toolbar = $('<ul class="app_tool_bar">Toolbar</ul>');
        this.container.append(this.toolbar);
    }
};

App.prototype.setMainMenu = function(menu) {
    if (menu && typeof menu == 'object' && menu.length) {
        for (var i = 0; i < menu.length; i++) {
            var item = menu[i];
            if (item && item.name) {
                var itemName = item.name || '';
                var itemShortcut = item.shortcut || '';
                if (itemShortcut != '') {
                    itemName += '(' + itemShortcut + ')';
                }
                var mainMenuItem = $('<li class="app_main_menu_item">' +itemName+ '</li>');
                this.mainMenuBar.append($(mainMenuItem));
                if (item.submenu) {
                    var submenuUl = $("<ul class='app_sub_menu_list'></ul>");
                    for (var j = 0; j < item.submenu.length; j++) {
                        var submenuItem = item.submenu[j];
                        if (submenuItem && submenuItem.name) {
                            var submenuItemName = submenuItem.name;
                            var submenuItemLi = $('<li>' + submenuItemName + '</li>');
                            if (submenuItemLi.click && typeof submenuItem.click === 'function') {
                                submenuItemLi.click(submenuItem.click);
                            }
                            submenuUl.append(submenuItemLi);
                        }
                    }
                    mainMenuItem.append(submenuUl);
                }
            } //if end
        } // for end
    } //if end
}
