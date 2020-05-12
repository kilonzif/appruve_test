//Js obfuscated

jQuery(function(_0x4c26x1) {
    'use strict';
    _0x4c26x1('form#wrapped')['attr']('action', 'review.php');
    _0x4c26x1('#wizard_container')['wizard']({
        stepsWrapper: '#wrapped',
        submit: '.submit',
        beforeSelect: function(_0x4c26x4, _0x4c26x5) {
            if (_0x4c26x1('input#website')['val']()['length'] != 0) {
                return false
            };
            if (!_0x4c26x5['isMovingForward']) {
                return true
            };
            var _0x4c26x6 = _0x4c26x1(this)['wizard']('state')['step']['find'](':input');
            return !_0x4c26x6['length'] || !!_0x4c26x6['valid']()
        }
    })['validate']({
        errorPlacement: function(_0x4c26x2, _0x4c26x3) {
            if (_0x4c26x3['is'](':radio') || _0x4c26x3['is'](':checkbox')) {
                _0x4c26x2['insertBefore'](_0x4c26x3['next']())
            } else {
                _0x4c26x2['insertAfter'](_0x4c26x3)
            }
        }
    });
    _0x4c26x1('#progressbar')['progressbar']();
    _0x4c26x1('#wizard_container')['wizard']({
        afterSelect: function(_0x4c26x4, _0x4c26x5) {
            _0x4c26x1('#progressbar')['progressbar']('value', _0x4c26x5['percentComplete']);
            _0x4c26x1('#location')['text']('(' + _0x4c26x5['stepsComplete'] + '/' + _0x4c26x5['stepsPossible'] + ')')
        }
    });
    _0x4c26x1('#wrapped')['validate']({
        ignore: [],
        rules: {
            select: {
                required: true
            }
        },
        errorPlacement: function(_0x4c26x2, _0x4c26x3) {
            if (_0x4c26x3['is']('select:hidden')) {
                _0x4c26x2['insertAfter'](_0x4c26x3['next']('.nice-select'))
            } else {
                _0x4c26x2['insertAfter'](_0x4c26x3)
            }
        }
    })
});

function getVals(_0x4c26x8, _0x4c26x9) {
    switch (_0x4c26x9) {
        case 'rating_input_1':
            var _0x4c26xa = $(_0x4c26x8)['val']();
            $('#rating_input_1')['text'](_0x4c26xa);
            break;
        case 'rating_input_2':
            var _0x4c26xa = $(_0x4c26x8)['val']();
            $('#rating_input_2')['text'](_0x4c26xa);
            break;
        case 'rating_input_3':
            var _0x4c26xa = $(_0x4c26x8)['val']();
            $('#rating_input_3')['text'](_0x4c26xa);
            break;
        case 'rating_input_4':
            var _0x4c26xa = $(_0x4c26x8)['val']();
            $('#rating_input_4')['text'](_0x4c26xa);
            break;
        case 'review_message':
            var _0x4c26xa = $(_0x4c26x8)['val']();
            $('#review_message')['text'](_0x4c26xa);
            break
    }
}
