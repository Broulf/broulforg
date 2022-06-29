def main():
    # Base print statement
    print("Broulf's Podcast Episode Appender")

    # Get Base Podcast Information
    #line = eval(input("Enter the line number for input (put a comment in the RSS file i.e '<!--Input Items-->' and use THAT line number): "))
    episode_number = input("Episode Number: ")
    episode_file = input("Episode File Name: ")
    file_duration = input("File Duration (in seconds!): ")
    file_date = input("File Date (3-Day, DD 3-Month YR HH:MM:SS GMT): ")

    # Open RSS File and Read
    rss_file = open("Y:/src/homer-new/html/feed/rss.xml", "r")
    contents = rss_file.readlines()
    rss_file.close()

    # Multiline Input
    multiline_string_rss = (
        '\t\t<item>'
        '\n\t\t\t<title><![CDATA[Broulf Cast - Episode {number}]]></title>'
        '\n\t\t\t<itunes:title><![CDATA[Broulf Cast - Episode {number}]]></itunes:title>'
        '\n\t\t\t<itunes:summary>Test RSS for Broulf Cast, a demo RSS tool and prototype by Broulf</itunes:summary>'
        '\n\t\t\t<description><![CDATA[<p>Test RSS for BroulfCast, a demo RSS tool and prototype by Broulf</p>]]></description>'
        '\n\t\t\t<link>https://broulf.org/feed/</link>'
        '\n\t\t\t<enclosure url="https://broulf.org/feed/{file}.mp3" length="285145" type="audio/mpeg"/>'
        '\n\t\t\t<guid isPermaLink="false">f903f6ca-0271-45d8-b363-439aebf65117</guid>'
        '\n\t\t\t<itunes:image href="https://broulf.org/feed/BroulfCast.jpg"/>'
        '\n\t\t\t<itunes:duration>{duration}</itunes:duration>'
        '\n\t\t\t<itunes:episodeType>full</itunes:episodeType>'
        '\n\t\t\t<itunes:episode>{number}</itunes:episode>'
        '\n\t\t\t<itunes:season>1</itunes:season>'
        '\n\t\t\t<itunes:explicit>no</itunes:explicit>'
        '\n\t\t\t<pubDate>{date}</pubDate>'
        '\n\t\t</item>\n').format(number = episode_number, file = episode_file, duration = file_duration, date = file_date)

    # Append to RSS File
    contents.insert(37, multiline_string_rss)

    # Write to RSS File
    rss_file = open("Y:/src/homer-new/html/feed/rss.xml", "w")
    contents = "".join(contents)
    rss_file.write(contents)
    rss_file.close()

    # HTML File Update
    html_file = open("Y:/src/homer-new/html/feed/index.html", "r")
    content = html_file.readlines()
    html_file.close()

    # Multiline Input
    multiline_string_html = (
            '\t\t\t\t\t<h2>Episode {number}</h2>\n'
            '\t\t\t\t\t<audio controls src="https://broulf.org/feed/{file}.mp3" style="width: 100%" type="audio/mpeg"> Your browser does not support the <code>audio</code> element. </audio>\n'
            '\t\t\t\t\t<hr>\n'
            ).format(number = episode_number, file = episode_file)

    # Append to RSS File
    content.insert(57, multiline_string_html)

    # Write to HTML File
    html_file = open("Y:/src/homer-new/html/feed/index.html", "w")
    content = "".join(content)
    html_file.write(content)
    html_file.close()

main()
