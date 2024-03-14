const View = {
    OnStartClick: function (method) {
        this.OnButtonClick('.screen.start', method);
    },
    OnGuessClick: function (method) {
        this.OnButtonClick('.screen.game', function () {
            var guess = parseInt(document.getElementById('guess').value);
            if (guess) method(guess);
        });
    },
    OnResetClick: function (method) {
        this.OnButtonClick('.screen.end', method);
    },
    OnButtonClick: function (parent, method) {
        document.querySelector(parent + ' button').onclick = function (evt) {
            evt.preventDefault();
            method();
        };
    },

    SwitchToGameScreen: function () {
        this.SwitchToScreen('game');
    },
    SwitchToResultScreen: function (success) {
        document.querySelector('.screen.end .message span').innerHTML = success ? 'Nyertél!' : 'Vesztettél!';
        this.SwitchToScreen('end');
    },
    SwitchToStartScreen: function () {
        this.SwitchToScreen('start');
    },
    SwitchToScreen: function (screen) {
        document.querySelector('.screen.start').classList.add('hidden');
        document.querySelector('.screen.game').classList.add('hidden');
        document.querySelector('.screen.end').classList.add('hidden');

        document.querySelector('.screen.' + screen).classList.remove('hidden');
    },

    PrepareStartScreen: function (bottom, top) {
        var elem = document.querySelector('.screen.start .message span');
        var text = elem.innerHTML;

        text = text.replace('AAA', bottom);
        text = text.replace('BBB', top);
        elem.innerHTML = text;
    },
    PrepareInput: function () {
        var inp = document.getElementById('guess');

        inp.value = '';
        inp.focus();
        inp.onclick = () => inp.value = '';
    },
    UpdateGameScreen: function (remain) {
        document.querySelector('.screen.game h3').innerHTML = `${remain} lehetőséged maradt`;
    },
    ShowGuessResponse: function (diff) {
        var msg = document.querySelector('.screen.game .message');

        msg.querySelector('span').innerHTML = diff > 0 ? 'nagyobb' : 'kisebb';
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 1500);
    }
};