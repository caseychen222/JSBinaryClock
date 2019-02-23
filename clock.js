function startClock()
{
	var t = new Date();
	var hours = t.getHours();
	var minutes = t.getMinutes();
	var seconds = t.getSeconds();

	var cells = Array.from(document.getElementsByTagName("td"));

	hours = pad(hours.toString(2));
	minutes = pad(minutes.toString(2));
	seconds = pad(seconds.toString(2));

	for (var c = 0; c < 19; c++)
	{
		if (c <= 5)
		{
			cells[c].innerText = hours.toString()[c];

			setStatus(cells[c]);
		}
		else if (c >= 6 && c <= 11)
		{
			cells[c].innerText = minutes.toString()[c-6];

			setStatus(cells[c]);
		}
		else
		{
			cells[c].innerText = seconds.toString()[c-12];

			setStatus(cells[c]);
		}
	}
}

function setStatus(cell)
{
	if (cell.innerText == "0")
	{
		cell.className = cell.className.replace("bg-primary text-white", "bg-light");
	}
	else
	{
		cell.className = cell.className.replace("bg-light", "bg-primary text-white");
	}
}

function pad(num)
{
	while (num.length < 6)
	{
		num = "0" + num;
	}

	return num;
}
