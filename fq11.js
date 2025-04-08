<<<<<<< HEAD
a = [10, 20, 30, 20, 30, 40, 50, 60, 10]
//find duplicate element
0 = []
for (i = 0; i <= a.length - 1; i++) {
    for (j = i + 1; j <= a.length - 1; j++) {
        if (a[i] == a[j]) {
            isDuplicate = false
            for (k = 0; k <= o.length - 1; k++) {
                if (a[i] == o[k]) {
                    isDuplicate = true
                }
            }
            if (!isDuplicate) {
                o.push(a[i]);
            }

        }
    }
}
console.log(o.length == 0 ? 'no duplicate numbers' : o);

=======
a = [10, 20, 30, 20, 30, 40, 50, 60, 10]
//find duplicate element
0 = []
for (i = 0; i <= a.length - 1; i++) {
    for (j = i + 1; j <= a.length - 1; j++) {
        if (a[i] == a[j]) {
            isDuplicate = false
            for (k = 0; k <= o.length - 1; k++) {
                if (a[i] == o[k]) {
                    isDuplicate = true
                }
            }
            if (!isDuplicate) {
                o.push(a[i]);
            }

        }
    }
}
console.log(o.length == 0 ? 'no duplicate numbers' : o);

>>>>>>> a905833c43fbe8a8bef1adc178fb02f912d51b46
