import Pagination from './component/pagination/pagination';
import PaginationNew from './component/pagination/pagination_new';
import PaginationText from './component/pagination/pagination.text';
import Dropper from './component/dropper/index';
import { Form, FormItem, FormButton, FormBlock } from './component/form';
import ImportLead from './component/import_lead';
import Storage from './component/storage';
import Calendar from './component/calendar';
import DatePicker from './component/datepicker/datepicker';
import DateRangePicker from './component/datepicker/daterangepicker';
import Tip from './component/tip';
import NProgress from './component/nprogress';
import Progress from './component/progress';
import Divider from './component/divider';
import Dialog from './component/dialog';
import Flex from './component/flex';
import TimeSpan from './component/timespan/timespan';
import TimeSpanPicker from './component/timespan/timespanpicker';
import DropSelect from './component/drop_select';
import SearchSelect from './component/search_select/search.select';
import FilterSearchSelect from './component/search_select/filter.search.select';
import Switch from './component/switch';
import { Sheet, SheetColumn, SheetAction, SheetSelect, SheetBatchAction } from './component/sheet';
import Cascader from './component/cascader/cascader';
import CascaderSelect from './component/cascader/cascader.select';
import Trigger from './component/trigger';
import Loading from './component/loading';
import InputNumber from './component/input/input.number';
import LayoutRoot from './component/layout_root';
import Modal from './component/modal';
import RightSideModal from './component/modal/right_side_modal';
import CleanModal from './component/modal/clean_modal';
import Collapse from './component/collapse';
import { DropDown, DropDownItem, DropDownItems } from './component/drop_down';
import TreeSelect from './component/tree_select';
import { QuickInfo, QuickInfoCell, QuickPanel, QuickFilter, QuickTab, QuickDesc } from './component/quick';
import { Radio, RadioGroup } from './component/radio';
import { Checkbox, CheckboxGroup } from './component/checkbox';
import FilterSelect from './component/filter_select/filter.select';
import MultipleFilterSelect from './component/filter_select/multiple.filter.select';
import Menu from './component/menu';
import Transfer from './component/transfer';
import ImagePreview from './component/image_preview';
import Mask from './component/mask';
import Popover from './component/popover';

import Validator from './validator';
import Emitter from './emitter';

import { Select, Option } from './component/select';

import './index.less';

Object.assign(Sheet, {
    SheetColumn,
    SheetAction,
    SheetSelect,
    SheetBatchAction
});

Object.assign(DropDown, {
    DropDownItems,
    DropDownItem
});

Object.assign(Form, {
    FormItem,
    FormButton
});

Object.assign(Radio, {
    RadioGroup
});

Object.assign(Checkbox, {
    CheckboxGroup
});

Object.assign(Select, {
    Option
});

export {
    Pagination,
    PaginationNew,
    PaginationText,
    Form, FormItem, FormButton, FormBlock,
    Calendar,
    DatePicker,
    DateRangePicker,
    ImportLead,
    Dropper,
    Storage,
    Tip,
    Progress,
    NProgress,
    Divider,
    Dialog,
    TimeSpan,
    Flex,
    TimeSpanPicker,
    DropSelect,
    SearchSelect,
    FilterSearchSelect,
    Cascader,
    CascaderSelect,
    Switch,
    Sheet,
    SheetColumn,
    SheetAction,
    SheetSelect,
    SheetBatchAction,
    Trigger,
    Loading,
    InputNumber,
    LayoutRoot,
    Modal,
    RightSideModal,
    CleanModal,
    Collapse,
    DropDown, DropDownItems, DropDownItem,
    TreeSelect,
    QuickInfo,
    QuickInfoCell,
    QuickPanel,
    QuickFilter,
    QuickTab,
    QuickDesc,
    Validator,
    Radio, RadioGroup,
    Checkbox, CheckboxGroup,
    Select, Option,
    Transfer,
    FilterSelect,
    MultipleFilterSelect,
    Mask,
    Popover,

    Menu,
    Emitter,
    ImagePreview
};