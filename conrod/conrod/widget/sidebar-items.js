initSidebarItems({"mod":[["button",""],["canvas",""],["drop_down_list",""],["envelope_editor",""],["label",""],["matrix",""],["number_dialer",""],["slider",""],["split",""],["tabs",""],["text_box",""],["toggle",""],["xy_pad",""]],"struct":[["CommonBuilder","A struct containing builder data common to all Widget types. This type allows us to do a blanket impl of Positionable and Sizeable for T: Widget."],["DrawArgs","Arguments for the `Widget::draw` method in a struct to simplify the method signature."],["State","Represents the unique cached state of a widget."],["UpdateArgs","Arguments for the `Widget::update` method in a struct to simplify the method signature."]],"trait":[["Widget","A trait to be implemented by all Widget types."]],"type":[["WidgetId","Unique widget identifier. Each widget must use a unique `WidgetId` so that it's state can be cached within the `Ui` type. The reason we use a usize is because widgets are cached within a `Vec`, which is limited to a size of `usize` elements."]]});