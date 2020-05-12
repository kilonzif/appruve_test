jQuery(function(_0xe5e0x1) {
    'use strict';
    _0xe5e0x1('form#wrapped')['attr']('action', 'quotation.php');
    _0xe5e0x1('#wizard_container')['wizard']({
        stepsWrapper: '#wrapped',
        submit: '.submit',
        beforeSelect: function(_0xe5e0x4, _0xe5e0x5) {
            if (_0xe5e0x1('input#website')['val']()['length'] != 0) {
                return false
            };
            if (!_0xe5e0x5['isMovingForward']) {
                return true
            };
            var _0xe5e0x6 = _0xe5e0x1(this)['wizard']('state')['step']['find'](':input');
            return !_0xe5e0x6['length'] || !!_0xe5e0x6['valid']()
        }
    })['validate']({
        errorPlacement: function(_0xe5e0x2, _0xe5e0x3) {
            if (_0xe5e0x3['is'](':radio') || _0xe5e0x3['is'](':checkbox')) {
                _0xe5e0x2['insertBefore'](_0xe5e0x3['next']())
            } else {
                _0xe5e0x2['insertAfter'](_0xe5e0x3)
            }
        }
    });
    _0xe5e0x1('#progressbar')['progressbar']();
    _0xe5e0x1('#wizard_container')['wizard']({
        afterSelect: function(_0xe5e0x4, _0xe5e0x5) {
            _0xe5e0x1('#progressbar')['progressbar']('value', _0xe5e0x5['percentComplete']);
            _0xe5e0x1('#location')['text']('(' + _0xe5e0x5['stepsComplete'] + '/' + _0xe5e0x5['stepsPossible'] + ')')
        }
    });
    _0xe5e0x1('#wrapped')['validate']({
        ignore: [],
        rules: {
            select: {
                required: true
            }
        },
        errorPlacement: function(_0xe5e0x2, _0xe5e0x3) {
            if (_0xe5e0x3['is']('select:hidden')) {
                _0xe5e0x2['insertAfter'](_0xe5e0x3['next']('.nice-select'))
            } else {
                _0xe5e0x2['insertAfter'](_0xe5e0x3)
            }
        }
    })
});
$('form#wrapped')['validate']({
    rules: {
        fileupload: {
            fileType: {
                types: ['jpg', 'jpeg', 'gif', 'png', 'pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
            },
            maxFileSize: {
                "\x75\x6E\x69\x74": 'KB',
                "\x73\x69\x7A\x65": 50
            },
            minFileSize: {
                "\x75\x6E\x69\x74": 'KB',
                "\x73\x69\x7A\x65": '2'
            }
        }
    }
});

function getVals(_0xe5e0x8, _0xe5e0x9) {
    switch (_0xe5e0x9) {
        case 'question_1':
            var _0xe5e0xa = $(_0xe5e0x8)['attr']('name');
            var _0xe5e0xb = [];
            $('input[name*=\'' + _0xe5e0xa + '\']')['each'](function() {
                if (jQuery(this)['is'](':checked')) {
                    _0xe5e0xb['push']($(this)['val']())
                }
            });
            $('#question_1')['text'](_0xe5e0xb['join'](', '));
            break;
        case 'additional_message':
            var _0xe5e0xb = $(_0xe5e0x8)['val']();
            $('#additional_message')['text'](_0xe5e0xb);
            break;
        case 'fileupload':
            var _0xe5e0xb = $(_0xe5e0x8)['val']();
            $('#fileupload')['text'](_0xe5e0xb);
            break;
        case 'budget':
            var _0xe5e0xb = $(_0xe5e0x8)['val']();
            $('#budget')['text'](_0xe5e0xb);
            break
    }
}