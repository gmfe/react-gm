import {EventEmitter} from 'gm-util';

const event_prefix = 'GM_EVENT_';

const Emitter = new EventEmitter();

const TYPE = {
    MODAL_SHOW: event_prefix + 'MODAL_SHOW',
    MODAL_HIDE: event_prefix + 'MODAL_HIDE',
    MODAL_SCROLL: event_prefix + 'MODAL_SCROLL',
    BROWSER_SCROLL: event_prefix + 'BROWSER_SCROLL',
    FULLLOADING_SHOW: event_prefix + 'FULLLOADING_SHOW',
    FULLLOADING_HIDE: event_prefix + 'FULLLOADING_HIDE',
    TITLE_CHANGE: event_prefix + 'TITLE_CHANGE'
};

Emitter.TYPE = TYPE;

export default Emitter;