// 废弃的
import ImportLead from './deprecated/import_lead'
import SearchSelect from './deprecated/search_select/search.select'
import FilterSearchSelect from './deprecated/search_select/filter.search.select'
import TreeSelect from './deprecated/tree_select'
import Trigger from './deprecated/trigger'
import PaginationFuck from './deprecated/pagination_fuck/pagination_fuck'

import {
  QuickPanel,
  QuickFilter,
  QuickTab,
  QuickDesc,
  QuickDetail
} from './deprecated/quick'
// 废弃的结束

import Pagination from './component/pagination/pagination'
import PaginationText from './component/pagination/pagination_text'
import PaginationV2 from './component/pagination/pagination_v2'
import Dropper from './component/dropper/index'
import {
  Form,
  FormItem,
  FormButton,
  FormBlock,
  FormGroup,
  FormPanel
} from './component/form'

import Storage from './component/storage'
import Calendar from './component/calendar/calendar'
import DatePicker from './component/date_picker'
import DateRangePicker from './component/date_range_picker'
import Tip from './component/tip'
import NProgress from './component/nprogress'
import Progress from './component/progress'
import ProgressCircle from './component/progress_circle'
import Divider from './component/divider'
import Dialog from './component/dialog'
import Flex from './component/flex'
import TimeSpan from './component/time_span/time_span'
import TimeSpanPicker from './component/time_span/time_span_picker'
import DropSelect from './component/drop_select'
import Switch from './component/switch'
import {
  Sheet,
  SheetColumn,
  SheetAction,
  SheetSelect,
  SheetBatchAction
} from './component/sheet'
import Cascader from './component/cascader/cascader'
import CascaderSelect from './component/cascader/cascader.select'

import Loading from './component/loading'
import LoadingChunk from './component/loading/loading_chunk'
import LoadingFullScreen from './component/loading/loading_full_screen'
import InputNumber from './component/input_number'
import InputNumberV2 from './component/input_number/number'
import LayoutRoot from './component/layout_root'
import Modal from './component/modal'
import RightSideModal from './component/modal/right_side_modal'
import CleanModal from './component/modal/clean_modal'
import Collapse from './component/collapse'
import { DropDown, DropDownItem, DropDownItems } from './component/drop_down'
import { Radio, RadioGroup } from './component/radio'
import { Checkbox, CheckboxGroup } from './component/checkbox'
import FilterSelect from './component/filter_select/filter.select'
import MultipleFilterSelect from './component/filter_select/multiple.filter.select'
import MoreSelect from './component/more_select'
import Nav from './component/nav'
import { Transfer, TransferGroup } from './component/transfer'
import Tree from './component/tree'
import ImagePreview from './component/image_preview'
import Mask from './component/mask'
import Popover from './component/popover'
import ColorPicker from './component/color_picker'
import Button from './component/button'
import Affix from './component/affix'
import Uploader from './component/uploader'
import Drawer from './component/drawer'
import EditableText from './component/editable_text'
import FlipNumber from './component/flip_number'
import Price from './component/price'
import List from './component/list'
import LazyImg from './component/lazy_img'
import ToolTip from './component/tool_tip'
import LevelList from './component/level_list'
import LevelSelect from './component/level_select'
import Input from './component/input'
import TableSelect from './component/table_select'

import FunctionSet from './component/function_set'

import { PopupContentConfirm } from './component/popup'

import Validator from './validator'

import { Select, Option } from './component/select'
import { setLocale } from './locales'

import Carousel from './component/carousel/carousel'
import { Box, BoxForm, BoxTable, BoxPanel } from './component/box'
import ImgUploader from './component/img_uploader'

import IconDownUp from './component/icon_down_up'

import { Col, Row } from './component/grid'
import Tabs from './component/tabs/tabs'

import ManagePagination from './business/manage_pagination'
import ManagePaginationV2 from './business/manage_pagination/v2'

import Steps from './component/steps'

Object.assign(Sheet, {
  SheetColumn,
  SheetAction,
  SheetSelect,
  SheetBatchAction
})

Object.assign(DropDown, {
  DropDownItems,
  DropDownItem
})

Object.assign(Form, {
  FormItem,
  FormButton
})

Object.assign(Radio, {
  RadioGroup
})

Object.assign(Checkbox, {
  CheckboxGroup
})

Object.assign(Select, {
  Option
})

const { QuickDetailFirst, QuickDetailSecond, QuickDetailThird } = QuickDetail

export {
  // 废弃的
  ImportLead,
  SearchSelect,
  FilterSearchSelect,
  TreeSelect,
  Trigger,
  PaginationText,
  PaginationFuck,
  // 废弃的结束

  Pagination,
  PaginationV2,
  Form,
  FormItem,
  FormButton,
  FormBlock,
  FormGroup,
  FormPanel,
  Calendar,
  DatePicker,
  DateRangePicker,
  Dropper,
  Storage,
  Tip,
  Progress,
  ProgressCircle,
  NProgress,
  Divider,
  Dialog,
  TimeSpan,
  Flex,
  TimeSpanPicker,
  DropSelect,
  Cascader,
  CascaderSelect,
  Switch,
  Sheet,
  SheetColumn,
  SheetAction,
  SheetSelect,
  SheetBatchAction,
  Loading,
  LoadingFullScreen,
  LoadingChunk,
  InputNumber,
  InputNumberV2,
  LayoutRoot,
  Modal,
  RightSideModal,
  CleanModal,
  Collapse,
  DropDown,
  DropDownItems,
  DropDownItem,
  QuickPanel,
  QuickFilter,
  QuickTab,
  QuickDesc,
  QuickDetail,
  QuickDetailFirst,
  QuickDetailSecond,
  QuickDetailThird,
  Validator,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  Transfer,
  TransferGroup,
  Tree,
  FilterSelect,
  MultipleFilterSelect,
  MoreSelect,
  Mask,
  Popover,
  ColorPicker,
  Button,
  Affix,
  Uploader,
  Drawer,
  Nav,
  ImagePreview,
  setLocale,
  EditableText,
  FlipNumber,
  Price,
  List,
  LazyImg,
  Carousel,
  ToolTip,
  LevelList,
  LevelSelect,
  Input,
  TableSelect,
  FunctionSet,
  Box,
  BoxForm,
  BoxTable,
  BoxPanel,
  PopupContentConfirm,
  ImgUploader,
  IconDownUp,
  Col,
  Row,
  Tabs,
  ManagePagination,
  ManagePaginationV2,
  Steps
}
