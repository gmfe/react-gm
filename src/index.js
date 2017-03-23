import Util from 'gm-util';
import Pagination from './component/pagination/pagination';
import PaginationText from './component/pagination/pagination.text';
import Dropper from './component/dropper/index';
import Form from './component/form';
import ImportLead from './component/import_lead';
import Storage from './component/storage';
import Calendar from './component/calendar';
import DatePicker from './component/datepicker/datepicker';
import DateRangePicker from './component/datepicker/daterangepicker';
import Tip from './component/tip';
import NProgress from './component/nprogress';
import Divider from './component/divider';
import Dialog from './component/dialog';
import Flex from './component/flex';
import TimeSpan from './component/timespan/timespan';
import TimeSpanPicker from './component/timespan/timespanpicker';
import DropSelect from './component/drop_select';
import SearchSelect from './component/search_select/search.select';
import FilterSearchSelect from './component/search_select/filter.search.select';
import Switch from './component/switch';
import Sheet from './component/sheet';
import Cascader from './component/cascader/cascader';
import CascaderSelect from './component/cascader/cascader.select';
import Trigger from './component/trigger';
import Loading from './component/loading';
import InputNumber from './component/input/input.number';
import LayoutRoot from './component/layout_root';
import Modal from './component/modal';
import Collapse from './component/collapse';
import DropDown from './component/drop_down';
import TreeSelect from './component/tree_select';
import {QuickInfo, QuickInfoCell, QuickPanel, QuickFilter, QuickTab, QuickDesc} from './component/quick';
import Radio from './component/radio';
import Checkbox from './component/checkbox';

import Validator from './validator';
import Transfer from './component/transfer';

import Select from './component/select';
import Input from './component/input/input';

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
    Transfer,
    Input
};