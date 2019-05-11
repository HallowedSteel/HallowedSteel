const argList = process.argv.slice(2);
    var sum = 0;
    console.log("---SUM STARTING---")
    argList.forEach(value => {
        console.log("+" + value);
        sum += Number(value);
    });
    console.log("---SUM=" + sum + "---");
