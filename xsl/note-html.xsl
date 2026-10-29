<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:import href="./core/pretext-html.xsl"/>
  <!-- Keep PreTeXt's Contents and previous/up/next navigation. -->
  <xsl:template match="*" mode="primary-navigation-other-controls"/>
  <xsl:template name="readability-options"/>
  <xsl:template name="runestone-header"/>
  <!-- Keep title-page metadata, but present prefaces without an HTML cover. -->
  <xsl:variable name="note-frontmatter-divisions" select="$document-root/frontmatter/*[self::colophon or self::biography or self::dedication or self::acknowledgement or self::preface or self::contributors]"/>
  <xsl:template match="frontmatter" mode="chunking">
    <xsl:apply-templates select="$note-frontmatter-divisions" mode="chunking"/>
  </xsl:template>
  <xsl:template match="frontmatter" mode="summary-nav">
    <xsl:apply-templates select="$note-frontmatter-divisions" mode="summary-nav"/>
  </xsl:template>
  <xsl:template match="frontmatter" mode="toc-item">
    <xsl:apply-templates select="$note-frontmatter-divisions" mode="toc-item"/>
  </xsl:template>
  <xsl:template match="frontmatter" mode="toc-item-list">
    <xsl:apply-templates select="$note-frontmatter-divisions" mode="toc-item-list"/>
  </xsl:template>
  <xsl:template match="frontmatter" mode="search-page-docs">
    <xsl:apply-templates select="$note-frontmatter-divisions" mode="search-page-docs"/>
  </xsl:template>
  <xsl:template match="frontmatter" mode="url">
    <xsl:choose>
      <xsl:when test="$note-frontmatter-divisions">
        <xsl:apply-templates select="$note-frontmatter-divisions[1]" mode="url"/>
      </xsl:when>
      <xsl:otherwise><xsl:apply-templates select=".." mode="url"/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  <xsl:template match="frontmatter/colophon | frontmatter/biography | frontmatter/dedication | frontmatter/acknowledgement | frontmatter/preface | frontmatter/contributors" mode="previous-linear-url">
    <xsl:choose>
      <xsl:when test="count(. | $note-frontmatter-divisions[1]) = 1">
        <xsl:apply-templates select="../.." mode="url"/>
      </xsl:when>
      <xsl:otherwise><xsl:apply-imports/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  <xsl:template match="frontmatter/colophon | frontmatter/biography | frontmatter/dedication | frontmatter/acknowledgement | frontmatter/preface | frontmatter/contributors" mode="up-url">
    <xsl:apply-templates select="../.." mode="url"/>
  </xsl:template>
  <!-- A bibliography alone does not need an intervening Back Matter page. -->
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]" mode="chunking">
    <xsl:apply-templates select="references" mode="chunking"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]" mode="summary-nav">
    <xsl:apply-templates select="references" mode="summary-nav"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]" mode="toc-item">
    <xsl:apply-templates select="references" mode="toc-item"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]" mode="toc-item-list">
    <xsl:apply-templates select="references" mode="toc-item-list"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]" mode="search-page-docs">
    <xsl:apply-templates select="references" mode="search-page-docs"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]" mode="url">
    <xsl:apply-templates select="references" mode="url"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]/references" mode="previous-linear-url">
    <xsl:apply-templates select=".." mode="previous-linear-url"/>
  </xsl:template>
  <xsl:template match="backmatter[references and not(appendix or solutions or glossary or index or colophon)]/references" mode="up-url">
    <xsl:apply-templates select="../.." mode="url"/>
  </xsl:template>

  <!-- Keep the revised notes' native backmatter containers out of the display hierarchy. -->
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter" mode="chunking">
    <xsl:apply-templates select="appendix | references | index" mode="chunking"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter" mode="summary-nav">
    <xsl:apply-templates select="appendix | references | index" mode="summary-nav"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter" mode="toc-item">
    <xsl:apply-templates select="appendix | references | index" mode="toc-item"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter" mode="toc-item-list">
    <xsl:apply-templates select="appendix | references | index" mode="toc-item-list"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter" mode="search-page-docs">
    <xsl:apply-templates select="appendix | references | index" mode="search-page-docs"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter" mode="url">
    <xsl:apply-templates select="(appendix | references | index)[1]" mode="url"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter/*[self::appendix or self::references or self::index][not(preceding-sibling::*[self::appendix or self::references or self::index])]" mode="previous-linear-url">
    <xsl:apply-templates select=".." mode="previous-linear-url"/>
  </xsl:template>
  <xsl:template match="book[@xml:id='cubic-k3-notes' or @xml:id='grothendieck-ring-notes']/backmatter/*[self::appendix or self::references or self::index]" mode="up-url">
    <xsl:apply-templates select="../.." mode="url"/>
  </xsl:template>
  <!-- Inline this chapter map so its SVG links remain directly usable. -->
  <xsl:template match="image[@xml:id='ck3-structure-map'][@source]" mode="image-inclusion">
    <div id="ck3-structure-map" style="width:100%;max-width:420px;margin:0 auto;">
      <xsl:copy-of select="document(concat($external-directory-source, @source), $original)/*[local-name()='svg']"/>
    </div>
  </xsl:template>
  <xsl:template match="image[@xml:id='grv-structure-map'][@source]" mode="image-inclusion">
    <div id="grv-structure-map" style="width:100%;max-width:420px;margin:0 auto;">
      <xsl:copy-of select="document(concat($external-directory-source, @source), $original)/*[local-name()='svg']"/>
    </div>
  </xsl:template>
  <xsl:template match="aside[starts-with(@xml:id, 'margin-')]" mode="is-hidden">false</xsl:template>
  <xsl:template match="biblio[@label]" mode="serial-number">
    <xsl:value-of select="@label"/>
  </xsl:template>
  <xsl:template match="book" mode="next-linear-url">
    <xsl:choose>
      <xsl:when test="$note-frontmatter-divisions">
        <xsl:apply-templates select="$note-frontmatter-divisions[1]" mode="url"/>
      </xsl:when>
      <xsl:otherwise><xsl:apply-templates select="(part | chapter)[1]" mode="url"/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  <xsl:template match="book/chapter[1] | book/part[1]" mode="previous-linear-url">
    <xsl:choose>
      <xsl:when test="$note-frontmatter-divisions">
        <xsl:apply-templates select="$note-frontmatter-divisions[last()]" mode="previous-descent-url"/>
      </xsl:when>
      <xsl:otherwise><xsl:apply-templates select=".." mode="url"/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
