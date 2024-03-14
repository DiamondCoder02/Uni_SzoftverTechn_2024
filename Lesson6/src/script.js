const BOTTOM = 0;
const TOP = 1000;
const LIVES = 10;

Model.PrepareNewGame(BOTTOM, TOP);

View.PrepareStartScreen(BOTTOM, TOP);
View.OnStartClick(() => {
    View.SwitchToGameScreen();
    View.PrepareInput();
    View.UpdateGameScreen(LIVES);
});
View.OnGuessClick(guess => {
    console.log(guess);
    View.ShowGuessResponse(1);
    //View.SwitchToResultScreen();
});
View.OnResetClick(() => {
    View.SwitchToStartScreen();
});