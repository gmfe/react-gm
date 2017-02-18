import Util from 'gm-util';
import Pagination from './component/pagination';
import PaginationText from './component/pagination.text';
import Dropper from './component/dropper';
import Form from './form';
import ImportLead from './component/import.lead';
import Storage from './component/storage';
import Calendar from './component/calendar';
import DatePicker from './component/datepicker';
import DateRangePicker from './component/daterangepicker';
import Tip from './component/tip';
import NProgress from './component/nprogress';
import Divider from './divider/index';
import Dialog from './component/dialog';
import Flex from './component/flex';
import TimeSpan from './component/timespan';
import TimeSpanPicker from './component/timespanpicker';
import DropSelect from './component/drop.select';
import SearchSelect from './component/search.select';
import FilterSearchSelect from './component/filter.search.select';
import Switch from './component/switch';
import Sheet from './component/sheet';
import Cascader from './component/cascader';
import CascaderSelect from './component/cascader.select';
import Trigger from './component/trigger';
import Loading from './component/loading';
import InputNumber from './component/input.number';
import LayoutRoot from './component/layout_root';
import Modal from './component/modal';
import Collapse from './component/collapse';
import DropDown from './component/drop.down';
import TreeSelect from './component/tree_select';
import {QuickInfo, QuickInfoCell, QuickPanel, QuickFilter, QuickTab, QuickDesc} from './component/quick';
import Radio from './radio';
import Checkbox from './checkbox';

import Validator from './validator';
import Transfer from './transfer';

import Select from './select';

import './index.less';

const {
    SheetColumn,
    SheetAction,
    SheetSelect,
    SheetBatchAction
} = Sheet;

const {
    DropDownItems,
    DropDownItem
} = DropDown;

const {
    FormItem,
    FormButton
} = Form;

const {
    RadioGroup
} = Radio;

const {
    CheckboxGroup
} = Checkbox;

const {
    Option
} = Select;

module.exports = {
    Util,
    Pagination,
    PaginationText,
    Form, FormItem, FormButton,
    Calendar,
    DatePicker,
    DateRangePicker,
    ImportLead,
    Dropper,
    Storage,
    Tip,
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
    Transfer
};