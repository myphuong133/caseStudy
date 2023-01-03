
        let count = 0;
        let victory = false;
        let id = '';
        let tick = 'O';
        let isPlayerA = true;
        var arrayCaro = [...Array(50)].map(e => Array(50));
        let scorePlayerA = 0;
        let scorePlayerB = 0;
        let tableLength = 40;
        let win = 5;

        console.log(arrayCaro);
        
        console.log(arrayCaro.length);

        function writeCaroTable() {
            let caroTable = '<table>';
            for (let row = 1; row < tableLength; row++) {
                caroTable += '<tr>'

                for (let col = 1; col < tableLength; col++) {
                    arrayCaro[row][col] = '';
                    caroTable += '<td ' + 'id="idcaro' + row + ',' + col + '"' + ' onclick="playGame(' + row + "," + col + ')" >' + arrayCaro[row][col] + '</td>'
                }
            }
            document.getElementById('create_caro').innerHTML = caroTable;
        }

        writeCaroTable()


        function playGame(row, col) {
            if (victory) {
                return
            }
            else {
                id = 'idcaro' + row + ',' + col;
                let a = document.getElementById(id).innerHTML;
                if (isPlayerA) {
                    if (a == '') {
                        document.getElementById(id).style.color = 'red';
                        tick = 'X';
                        isPlayerA = false;
                    }
                } else if (a == '') {
                    {
                        document.getElementById(id).style.color = 'blue';
                        tick = 'O';
                        isPlayerA = true;
                    }
                }

                if (arrayCaro[row][col] == '') {
                    arrayCaro[row][col] = tick;
                    document.getElementById(id).innerText = arrayCaro[row][col]
                }
                checkRow(tick);
                checkCol(tick);
                checkCrossRowleft(tick);
                checkCrossRowRight(tick);
                checkVictory(tick);
            }
        }
        function checkRow(tick) {
            for (let i = 0; i < tableLength; i++) {
                for (let j = 0; j < arrayCaro[0].length; j++) {
                    if (arrayCaro[i][j] == tick) {
                        count++;

                    } else {
                        count = 0
                    } if (count >= win) {
                        victory = true;
                        break
                    }
                }

            }
        }

        function checkCol(tick) {
            for (let i = 0; i < tableLength; i++) {
                for (let j = 0; j < tableLength; j++) {

                    if (arrayCaro[j][i] == tick) {
                        count++;

                    } else {
                        count = 0
                    } if (count >= win) {
                        victory = true;
                        break
                    }
                }

            }
        };

        function checkCrossRowleft(tick) {
            let k = 2;
            let l = 1;

            for (let i = 0; i < tableLength; i++) {


                for (let j = 0; j < tableLength; j++) {
                    k = i;

                    l = j;

                    for (; k < tableLength; k++) {

                        if (arrayCaro[k][l] == tick) {
                            count++;
                        }
                        else {
                            count = 0
                        } if (count >= win) {
                            victory = true;
                            break
                        }
                        l++
                    }

                }
            }
        }

        function checkCrossRowRight(tick) {
            let k = 0;
            let l = 0;
            for (let i = 0; i < tableLength; i++) {

                for (let j = 0; j < tableLength; j++) {
                    k = i;

                    l = j;
                    for (; k > 0; k--) {

                        if (arrayCaro[k][l] == tick) {

                            count++;
                        }
                        else {
                            count = 0
                        } if (count >= win) {
                            victory = true;
                            break
                        }
                        l++
                    }

                }
            }
        }




        function checkVictory(tick) {
            if (victory) {
                alert(tick + ' Win')
                if (tick == 'X') {
                    scorePlayerA++
                }
                else {
                    scorePlayerB++
                }
                document.getElementById('score').innerHTML = scorePlayerA + ' - ' + scorePlayerB;
            }
        }

        function playAgain() {
            isPlayerA = true;
            victory = false;
            caroTable = '<table>';
            for (row = 0; row < tableLength; row++) {
                caroTable += '<tr>'

                for (col = 0; col < arrayCaro[0].length; col++) {
                    arrayCaro[row][col] = '';
                    caroTable += '<td ' + 'id="idcaro' + row + ',' + col + '"' + ' onclick="game(' + row + "," + col + ')" >' + arrayCaro[row][col] + '</td>'
                }

            }

            writeCaroTable()
        }

        function surrender(tick) {
            if (confirm("Bạn có chắc là muốn đầu hàng không ?") == true) {
                victory = true;
                checkVictory(tick)
                playAgain()
            }

        }

        function showSetting() {
            console.log('ok');
            document.getElementById('setting').style.display = 'flex';
        }

        function closeSetting() {
            document.getElementById('setting').style.display = 'none';
        }

        function changeTable(winCondition, b) {
            if (confirm("Bạn có chắc là muốn đổi Gameplay không ?") == true) {
                win = winCondition;
                tableLength = b;
                playAgain()
                document.getElementById('setting').style.display = 'none';
                console.log(arrayCaro);
            }

        }

